import { BenchmarkInformation } from "./benchmark-information.model";
import { Measurement } from "./measurement.model";

export class Benchmark {
    BenchmarkInfo: BenchmarkInformation;
    SingleThreadedResult: Measurement;
    MultiThreadedResult: Measurement;
}