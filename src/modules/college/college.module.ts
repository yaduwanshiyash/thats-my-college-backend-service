import { Module } from '@nestjs/common';
import { CollegeService } from './college.service';
import { CollegeController } from './college.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { College, CollegeSchema } from './entities/college.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: College.name, schema: CollegeSchema }, // Define the feature with the schema
    ]),
  ],
  controllers: [CollegeController],
  providers: [CollegeService],
  exports: [CollegeService],
})
export class CollegeModule {}
