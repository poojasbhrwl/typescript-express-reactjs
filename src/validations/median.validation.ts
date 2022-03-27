import Joi from "joi"

class MedianValidation {
    public medianValidation = (body: object) : any => {
        const schema = Joi.object().keys({
            number: Joi.number().required().label('Value').min(1)
        })
        return schema.validate(body)
    }
}
export const MedianValidations = new MedianValidation()