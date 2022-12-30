import RandomNumber from "@/components/RandomNumber";

import { mount } from "@vue/test-utils";

describe("RandomNumber", () => {
	test("By default, randomNumber data value should be 0", () => {
		// expect(true).toBe(false);
		const wrapper = mount(RandomNumber);
		expect(wrapper.html()).toContain("<span>0</span>");
	});

	test("If button is clicked, randomNumber data value should be 1 to 10", async () => {
		// expect(true).toBe(false);
		const wrapper = mount(RandomNumber);
		await wrapper.find("button").trigger("click");

		const randomNumber = parseInt(wrapper.find("span").text());
		expect(randomNumber).toBeGreaterThanOrEqual(1);
		expect(randomNumber).toBeLessThanOrEqual(10);
	});
	test("If button is clicked, randomNumber should be 200 to 300", async () => {
		// expect(true).toBe(false);
		const wrapper = mount(RandomNumber, {
			props: {
				min: 200,
				max: 300,
			},
		});
		await wrapper.find("button").trigger("click");

		const randomNumber = parseInt(wrapper.find("span").text());
		expect(randomNumber).toBeGreaterThanOrEqual(200);
		expect(randomNumber).toBeLessThanOrEqual(300);
	});
});
