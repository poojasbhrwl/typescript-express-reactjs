import { MedianService } from "../src/controllers/median";

describe("test add function", () => {
    it("should return [3,5] for n 10", async () => {
        const median = await MedianService.getMedian({ number: 10 });
        expect(median).toStrictEqual({ medianData: [3, 5], status: 200 });
    });
    it("should return [7] for n 18", async () => {
        const median = await MedianService.getMedian({ number: 18 });
        expect(median).toStrictEqual({ medianData: [7], status: 200 });
    });
    it("should return [0] for n 1", async () => {
        const median = await MedianService.getMedian({ number: 1 });
        expect(median).toStrictEqual({ medianData: [0], status: 200 });
    });
});