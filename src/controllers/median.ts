

export default class MedianService {
  
  // function for list all categories
  public listMedian = async (request: Request): Promise<any> => {
    
    const response: any = {status: 200}
    try {
        var medianData: number = 0  // get all categories
        response.medianData = medianData
    } catch (e) {
      response.status = 500
      response.error = e
    }
    return response;  // return response to router
  }
  
}

