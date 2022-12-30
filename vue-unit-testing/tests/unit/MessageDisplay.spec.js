import MessageDisplay from "@/components/MessageDisplay.vue";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import flushPromises from "flush-promises";

jest.mock("@/services/axios");

beforeEach(() => {
	jest.clearAllMocks();
});

describe("MessageDisplay", () => {
	it("Calls getMessage and display messagae", async () => {
		const mockMessage = "Hello from the db";
		getMessage.mockResolvedValueOnce({ text: mockMessage });
		const wrapper = mount(MessageDisplay);

		await flushPromises();
		expect(getMessage).toHaveBeenCalledTimes(1); // check that call happened once

		// check that component displays message
		const displayMessage = wrapper.find('[data-testid="message"]').text();
		expect(displayMessage).toEqual(mockMessage);
	});

	it("Display an error when getMessage call fails", async () => {
		const mockError = "Oops! Something went wrong.";
		getMessage.mockRejectedValueOnce(mockError);
		const wrapper = mount(MessageDisplay);

		await flushPromises();
		expect(getMessage).toHaveBeenCalledTimes(1); // check that call happened once

		// check that component displays message
		const displayError = wrapper
			.find('[data-testid="message-error"]')
			.text();
		expect(displayError).toEqual(mockError);
	});
});
