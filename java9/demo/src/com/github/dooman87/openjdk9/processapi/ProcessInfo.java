package com.github.dooman87.openjdk9.processapi;

import java.io.IOException;

/**
 * @author dpokidov
 */
public class ProcessInfo {
    public static void main(String[] args) throws IOException {
        Process process = new ProcessBuilder().command("xterm").start();
        ProcessHandle processHandle = process.toHandle();
        System.out.printf("PID: %s, CMD: %s\n", processHandle.getPid(), processHandle.info().command().get());
    }
}
