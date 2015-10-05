package com.github.dooman87.openjdk9.processapi;

/**
 * @author dpokidov
 */
public class ProcessList {
    public static void main(String[] args) throws Exception {
        System.out.printf("|   PID   |              Command                                                    |       Start time           |     User     |   CPU (ms) | \n");
        ProcessHandle.allProcesses().forEach(processHandle -> {

            System.out.printf("|%6s   |%70s   |%24s   |%12s  |%9s  |\n",
                processHandle.getPid(),
                processHandle.info().command().orElse("???"),
                processHandle.info().startInstant().get().toString(),
                processHandle.info().user().get(),
                processHandle.info().totalCpuDuration().get().toMillis());
        });
    }
}
