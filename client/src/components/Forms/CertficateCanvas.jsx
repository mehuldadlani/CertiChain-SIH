import React, { useEffect, useRef } from "react";
import ticketImg from "../../assets/certificateTemplate.svg";
<style>
	import
	url('https://fonts.googleapis.com/css2?family=Inder&family=Pinyon+Script&family=Work+Sans&display=swap');
</style>;

export default function CertificateCanvas({
	ticketDetails,
	setTicketUrl,
	height,
}) {
	const canvas = useRef(null);

	useEffect(() => {
		console.log("Hello");
		const ctx = canvas.current.getContext("2d");
		const dpi = window.devicePixelRatio;

		function fix_dpi() {
			const style = {
				height() {
					return +getComputedStyle(canvas.current)
						.getPropertyValue("height")
						.slice(0, -2);
				},
				width() {
					return +getComputedStyle(canvas.current)
						.getPropertyValue("width")
						.slice(0, -2);
				},
			};
			canvas.current?.setAttribute("width", style.width() * dpi);
			canvas.current?.setAttribute("height", style.height() * dpi);
		}

		const getW = (w) => {
			return (canvas.current?.width * w) / 200.5;
		};
		const getH = (h) => {
			return (canvas.current?.height * h) / 360;
		};

		var img = new Image();

		img.src = ticketImg;

		img.onload = function () {
			fix_dpi();
			ctx.drawImage(img, 0, 0, getW(200.5), getH(360));

			var poster = new Image();
			poster.src = ticketDetails.logo;
			poster.setAttribute("crossorigin", "anonymous");
			// poster.crossOrigin = "anonymous";

			poster.onload = function () {
				ctx.drawImage(poster, getW(90), getH(40), getW(20), getH(20));
			};

			var sign = new Image();
			sign.src = ticketDetails.signature;
			sign.setAttribute("crossorigin", "anonymous");
			// poster.crossOrigin = "anonymous";

			sign.onload = function () {
				ctx.drawImage(poster, getW(107), getH(291), getW(35), getH(18));
			};

			ctx.font = "400 " + getH(15) + "px Pinyon";
			ctx.textAlign = "center";
			ctx.fillStyle = "#22272E";
			ctx.fillText(
				ticketDetails.name.length >= 18
					? ticketDetails.name.slice(0, 18) + "..."
					: ticketDetails.name,
				getW(100.25),
				getH(230)
			);

			ctx.font = "400 " + getH(12) + "px Pinyon";
			ctx.textAlign = "center";
			ctx.fillStyle = "#22272E";
			ctx.fillText(
				ticketDetails.name.length >= 18
					? ticketDetails.name.slice(0, 18) + "..."
					: ticketDetails.name,
				getW(75.25),
				getH(310)
			);

			ctx.font = "400 " + getH(12) + "px Pinyon";
			ctx.textAlign = "center";
			ctx.fillStyle = "#22272E";
			ctx.fillText(
				ticketDetails.organisationName.length >= 18
					? ticketDetails.organisationName.slice(0, 18) + "..."
					: ticketDetails.organisationName,
				getW(123.25),
				getH(255)
			);

			let randomNumber = Math.floor(Math.random() * 10000000000000 + 1);

			ctx.font = "400 " + getH(12) + "px Pinyon";
			ctx.textAlign = "center";
			ctx.fillStyle = "#22272E";
			ctx.fillText(randomNumber, getW(103), getH(275));
			console.log(canvas.current.toDataURL());
			setTicketUrl(canvas.current.toDataURL());
		};
	}, [ticketDetails]);

	return (
		<canvas
			ref={canvas}
			width="612px"
			height="858px"
			className="transition hover:scale-110"
			style={{ width: 858, height: 612 }}
		>
			<p>Your Browser doesn't support HTML Canvas</p>
		</canvas>
	);
}
