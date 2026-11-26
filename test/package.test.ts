import * as fs from "fs";
import * as path from "path";

describe("package.json", () => {
  it("points repository.url at the github repo for npm provenance", () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf-8"));

    expect(pkg.repository.url).toBe("https://github.com/pepperize/cdk-dynamodb-backup.git");
  });
});
