import { ContainerAdapterInfo } from "./container-adapter-info.model";
import { BenchmarkInformation } from "./benchmark-information.model";
import { Measurement } from "./measurement.model";

export class BenchmarkResult {
    BenchmarkInfo: BenchmarkInformation;
    ContainerInfo: ContainerAdapterInfo;
    SingleThreadedResult: Measurement;
    MultiThreadedResult: Measurement;
}
