import Joi from "joi";

const queriesValidation = Joi.object({
  name: Joi.string().required().min(4).max(18),
  email: Joi.string().required().email(),
  message: Joi.string().required().min(4).max(400),
}).options({ allowUnknown: false });

const queriesValid = (body: any) => {
  const { error } = queriesValidation.validate(body);
  return error;
};

export default queriesValid;
