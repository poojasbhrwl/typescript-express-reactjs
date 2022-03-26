import Joi from "joi"

class MedianValidation {
    public medianValidation = (body: object) : Promise<any> => {
        const schema = Joi.object().keys({
            name: Joi.string().required().label('Name')
        })
        return schema.validateAsync(body)
    }
}
export const MedianValidations = new MedianValidation()