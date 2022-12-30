import LoginForm from "@/components/LoginForm";

import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
	it("emits an event with a user data payload", () => {
		const wrapper = mount(LoginForm);
		// const input = wrapper.find("input[type=text]");
		const input = wrapper.find("[data-testid='name-input']");

		input.setValue("Adam Jahr");
		wrapper.trigger("submit");

		const formSubmittedCalls = wrapper.emitted("formSubmitted");
		console.log(formSubmittedCalls);
		expect(formSubmittedCalls).toHaveLength(1);

		const expectedPayload = { name: "Adam Jahr" };
		expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
			expectedPayload
		);
	});
});
