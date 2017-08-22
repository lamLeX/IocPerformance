import { BenchmarkInformation } from "./benchmark-information.model";
import { Measurement } from "./measurement.model";

export class Benchmark {
    benchInfo: BenchmarkInformation;
    singleThreadedResult: Measurement;
    maxTimeInSingleThread: number;
    multiThreadedResult: Measurement;
    maxTimeInMultiThread: number;
}