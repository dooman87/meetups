package com.github.dooman87.openjdk9.processapi;

import java.io.IOException;

/**
 * @author dpokidov
 */
public class ChildrenProcess {
    public static void main(String[] args) throws IOException {
        Process process = new ProcessBuilder().command("xterm").redirectOutput()start();
        ProcessHandle processHandle = process.toHandle();
        System.out.printf("PID: %s, CMD: %s\n", processHandle.getPid(), processHandle.info().command().get());
        processHandle.parent().ifPresent(parent -> {
            System.out.printf("PARENT PID: %s, CMD: %s\n", parent.getPid(), parent.info().command().get());

            parent.allChildren().forEach(child -> {
                System.out.printf("\tPID: %s, CMD: %s\n", child.getPid(), child.info().command().get());
            });
        });
    }

}
