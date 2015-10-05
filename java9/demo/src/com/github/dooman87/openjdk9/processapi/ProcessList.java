package com.github.dooman87.openjdk9.processapi;

import java.time.Duration;
import java.time.Instant;

/**
 * @author dpokidov
 */
public class ProcessList {
    public static void main(String[] args) throws Exception {
        System.out.printf("|   PID   |              Command                                                    |       Start time              |     User        |   CPU (ms) | \n");
        ProcessHandle.allProcesses().forEach(processHandle -> {
            System.out.printf("|%6s   |%70s   |%27s   |%15s  |%9s  |\n",
                    processHandle.getPid(),
                    processHandle.info().command().orElse("???"),
                    processHandle.info().startInstant().orElse(Instant.MIN).toString(),
                    processHandle.info().user().orElse("???"),
                    processHandle.info().totalCpuDuration().orElse(Duration.ofMillis(-1)).toMillis());
        });
    }
}
