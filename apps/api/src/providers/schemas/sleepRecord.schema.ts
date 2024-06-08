import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, ObjectId } from 'mongoose';

@Schema({ versionKey: false })
export class SleepRecord extends Document {
  _id: ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  date: string;
}

export type SleepRecordDocument = HydratedDocument<SleepRecord>;
export const SleepRecordSchema = SchemaFactory.createForClass(SleepRecord);
