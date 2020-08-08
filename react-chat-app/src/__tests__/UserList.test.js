import React from "react";
import { mount } from "enzyme";
import UserList from "../components/UserList";
import users from "../dummy-users-for-jest";

describe("UserList", () => {
  describe("when userData given to UserList", () => {
    it("should render users", () => {
      const wrapper = mount(<UserList userData={users} />);
      expect(wrapper.find(".chat-list").exists()).toBe(true);
      expect(wrapper.find(".rce-citem-body--top-title").length).toBe(
        users.length
      );
      expect(wrapper.find(".rce-citem-body--top-title").first().text()).toBe(
        users[0].name
      );
      wrapper.unmount();
    });
  });

  describe("when no users given to UserList", () => {
    it("should render users", () => {
      const wrapper = mount(<UserList userData={[]} />);
      expect(wrapper.find(".chat-list").exists()).toBe(false);
      expect(wrapper.find(".no-users").first().text()).toBe(
        "No users to show."
      );
      wrapper.unmount();
    });
  });
});
