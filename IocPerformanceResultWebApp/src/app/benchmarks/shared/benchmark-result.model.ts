import { ContainerAdapterInfo } from "./container-adapter-info.model";
import { BenchmarkInfo } from "./benchmark-info.model";
import { Measurement } from "./measurement.model";

export class BenchmarkResult {
    benchmarkInfo: BenchmarkInfo;
    containerInfo: ContainerAdapterInfo;
    singleThreadedResult: Measurement;
    multiThreadedResult: Measurement;
}
