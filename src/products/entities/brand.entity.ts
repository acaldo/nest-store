import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Brand extends Document {
  @Prop({ index: true, required: true, unique: true })
  name: string;
}
export const BrandSchema = SchemaFactory.createForClass(Brand);
