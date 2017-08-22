import { ContainerAdapterInfo } from "./container-adapter-info.model";
import { Benchmark } from "./benchmark.model";

export class BenchmarkDisplay {
    containerInfo: ContainerAdapterInfo;
    benchmarks: Benchmark[] = [];

    public constructor(init?: Partial<BenchmarkDisplay>) {
        Object.assign(this, init);
    }
}