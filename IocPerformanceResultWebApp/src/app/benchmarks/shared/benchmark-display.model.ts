import { ContainerAdapterInfo } from "./container-adapter-info.model";
import { Benchmark } from "./benchmark.model";

export class BenchmarkDisplay {
    ContainerInfo: ContainerAdapterInfo;
    Benchmarks: Benchmark[];

    public constructor(init?: Partial<BenchmarkDisplay>) {
        Object.assign(this, init);
    }
}