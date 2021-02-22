import { Migration } from '@mikro-orm/migrations';

export class Migration20210222003411 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `user` add `created_at` datetime not null, add `updated_at` datetime not null;');
  }

}
