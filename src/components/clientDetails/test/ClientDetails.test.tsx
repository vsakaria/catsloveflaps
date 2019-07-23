import React from "react";
import ClientDetails from "../ClientDetails";
import { mountSnapShot } from "../../../utils/testing/testing";

describe("ClientSummary", () => {
  it("should display the title", () => {
    const props = {
      id: 49084369,
      name: "AutoCBS1",
      status: "Active",
      adminType: "Single Admin",
      passwordExpiryPeriod: 90,
      activeFrom: "24/05/2019"
    };

    const clientSummarySS = mountSnapShot(<ClientDetails {...props} />);

    expect(clientSummarySS).toMatchSnapshot();
  });
});
