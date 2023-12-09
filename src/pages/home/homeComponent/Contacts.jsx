import React from "react";
import Button from "../../../reuse/Button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		// emailjs
		// 	.send(
		// 		"service_at3kvap",
		// 		"template_du1zsn7",
		// 		form.current,
		// 		"AWTDDzD1prNjlGP-F"
		// 	)
		emailjs
			.sendForm(
				"service_at3kvap",
				// "template_rrsov4c",
				"template_du1zsn7",
				form.current,
				"AWTDDzD1prNjlGP-F"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("email sent successfully");
					e.target.reset();
				},
				(error) => {
					alert("email wasn't sent");
					console.log(error.text);
					alert("please try again");
				}
			);
	};

	return (
		<div>
			<div className="mt-12 mb-4 md:mt-10 lg:mt-6">
				<h1 className="text-xl font-semibold text-[#ffc8a9] mb-8">
					Let's get in touch
				</h1>
				<div></div>
				<form
					action=""
					className="flex flex-col gap-3"
					ref={form}
					onSubmit={sendEmail}
				>
					<input
						type="text"
						name="to_name"
						placeholder="Your name"
						className="bg-transparent border-b-2 border-[#c31b25] focus:outline-none placeholder:text-[#ffc8a9] placeholder:text-sm placeholder:opacity-70 text-[#ffc8a9] caret-[#c31b25] focus:border-[#fdc270]"
					/>
					<input
						type="text"
						name="from_email"
						placeholder="Your email address"
						className="bg-transparent border-b-2 border-[#c31b25] focus:outline-none placeholder:text-[#ffc8a9] placeholder:text-sm placeholder:opacity-70 text-[#ffc8a9] caret-[#c31b25] focus:border-[#fdc270]"
					/>
					<textarea
						name="message"
						placeholder="Your message"
						cols="30"
						rows="7"
						className="bg-transparent border-b-2 border-[#c31b25] focus:outline-none placeholder:text-[#ffc8a9] placeholder:text-sm placeholder:opacity-70 text-[#ffc8a9] caret-[#df9095] focus:border-[#fdc270]"
					></textarea>

					<div className="flex justify-end">
						{/* <Button>
						</Button> */}
						<input
							type="submit"
							value="Submit"
							className="navLink"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contacts;
