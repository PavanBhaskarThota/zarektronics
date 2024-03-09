const mongoose = require("mongoose");

let expenseSchema = mongoose.Schema(
  {
    date: { type: Date, required: true },
    expensetype: { type: String, required: true },
    description: String,
    expensestatus: {
      type: String,
      required: true,
      enum: ["pending", "approved", "rejected"],
    },
    userId: String,
    userName: String,
  },
  { timestamps: true },
  { versionkey: false }
);

const ExpenseModel = mongoose.model("expense", expenseSchema);

module.exports = { ExpenseModel };
