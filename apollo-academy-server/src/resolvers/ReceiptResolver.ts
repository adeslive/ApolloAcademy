import { Receipt } from './../entities/Receipt';
import { Course } from './../entities/Course';
import { Arg, Ctx, ID, Int, Mutation, Query, Resolver } from "type-graphql";
import { ORMContext } from '../types';


@Resolver()
export class ReceiptResolver {

    @Query(() => [Receipt])
    myreceipts(
        @Ctx() { req }: ORMContext
    ): Promise<Receipt[]> {
        return Receipt.createQueryBuilder("receipt")
            .leftJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
            .where('receipt.paid = 1')
            .andWhere("receipt.id IS NOT NULL")
            .getMany();
    }

    @Mutation(() => Receipt)
    receipt(
        @Arg('id', () => ID) id : number,
        @Ctx() { req }: ORMContext
    ): Promise<Receipt | undefined> {
        return Receipt.createQueryBuilder("receipt")
            .leftJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
            .leftJoinAndSelect("receipt.virtual", "classroom")
            .leftJoinAndSelect("classroom.course", "course")
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("classroom.teacher", "teacher")
            .leftJoinAndSelect("teacher.user", "user")
            .where('receipt.paid = 1')
            .andWhere("receipt.id = :id", {id: id})
            .getOne();
    }
}