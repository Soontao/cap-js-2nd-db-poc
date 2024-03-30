import cds from "@sap/cds";

cds.on("bootstrap", () => {});

cds.on("serving:cds.xt.DeploymentService", (ds) => {
  ds.prepend((ds) => {
    ds.after("deploy", async () => {
      const db2 = await cds.connect.to("db2");
      await db2.run(
        "CREATE TABLE MyTable (ID INT PRIMARY KEY, Name VARCHAR(255))",
      );
    });
  });
});
