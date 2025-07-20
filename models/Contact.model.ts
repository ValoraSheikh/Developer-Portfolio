import { Schema, model, models, Document } from "mongoose";

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: number;
  message: string;
  services: string[];
  expense: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    services: {
      type: [String],
      default: [],
    },
    expense: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Contact =
  models.Contact || model<IContact>("Contact", ContactSchema);
