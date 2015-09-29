package com.github.dooman87.openjdk9.processapi;

/**
 * @author dpokidov
 */
public class Main {
    public static void main(String[] args) throws Exception {
        Process process = new ProcessBuilder().command("xterm").start();
        ProcessHandle processHandle = process.toHandle();
        System.out.printf("PID: %s\n", processHandle.getPid());
        process.waitFor();
    }
}
