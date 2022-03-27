import { MedianValidations } from "../validations/median.validation";
import { logsData } from '../middleware/logs'
class MedianServices {

  /**
   * 
   * this function helps to calculate median(s) of prime number of n
   * @param request = { number : n}
   * @returns response = { status: status, error: {}, medianData: []}
   */
  public getMedian = async (request: any): Promise<any> => {
    const response: any = {}
    try {
      const validation = await MedianValidations.medianValidation(request)   // validates input request
      const { number: number } = request
      if (validation.error) {
        response.status = 400
        response.error = validation.error
      } else {
        response.status = 200
        var medianData: number[] = []
        if (number == 1) {
          medianData.push(0)
        } else {
          var primeData: number[] = await findPrime(number);   // get prime numbers for (0 - number)
          medianData = await findMedian(primeData)   // get medians of prime numbers
        }
        response.medianData = medianData
      }
      return response;  // return response to router
    } catch (e) {
      logsData.writeLogs({ service:'getMedian', err: e, date: new Date() })  // please check debug.logs file for exceptions
      response.status = 500
      response.error = e
    }
  }

}


/**
 * 
 * helps to find prime number for 0 to number
 * @param number 
 * @returns array of prime numbers
 */
const findPrime = (number: number) => {
  try {
    var primeData: number[] = []
    for (let i = 1; i <= number; i++) {
      let flag = 0;
      // looping through 2 to user input number
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 1;
          break;
        }
      }
      // if number greater than 1 and not divisible by other numbers
      if (i > 1 && flag == 0) {
        primeData.push(i);
      }
    }
    return primeData;

  } catch (e) {
    logsData.writeLogs({ service:'findPrime', err: e, date: new Date() })  // please check debug.logs file for exceptions
    throw e
  }
}

/**
 * 
 * helps to find medians of prime numbers
 * @param arr = array of prime numbers
 * @returns array of median (if length of arr is even then return 2 numbers else return 1 number)
 */

const findMedian = (arr: number[]) => {
  try {
    const medianArr: number[] = []
    const middle: number = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      medianArr.push(arr[middle - 1]);  // return first median number if length of array is even
    }
    medianArr.push(arr[middle]);   // return exact/second median number
    return medianArr;
  } catch (e) {
    logsData.writeLogs({ service:'findMedian', err: e, date: new Date() })  // please check debug.logs file for exceptions
    throw e
  }
}



export const MedianService = new MedianServices()