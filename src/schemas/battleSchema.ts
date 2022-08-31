import Joi from "joi";

export const newBattle = Joi.object({
  firstUser: Joi.string().required(),
  secondUser: Joi.string().required(),
});
