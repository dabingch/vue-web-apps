import AppHeader from "@/components/AppHeader";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
	test("if user is not logged in, do not show logout button", () => {
		const wrapper = mount(AppHeader);
		// expect(true).toBe(true);
		expect(wrapper.find("button").isVisible()).toBe(false);
	});

	test("if a user is logged in, show logout button", async () => {
		const wrapper = mount(AppHeader);
		// expect(true).toBe(true);
		await wrapper.setData({ loggedIn: true });
		expect(wrapper.find("button").isVisible()).toBe(true);
	});
});
