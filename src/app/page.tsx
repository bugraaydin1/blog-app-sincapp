import Image from "next/image";
import Link from "next/link";

export default function BlogHome() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>Blog App</h1>
				<Image
					src="/sincapptech.jpeg"
					className="rounded-lg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<Link
						href="/posts"
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
					>
						<Image
							alt="Blog Posts"
							src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPjxsaW5lYXJHcmFkaWVudCBpZD0iQlJ3fnczRVk1WU9iaHY3T3BNOUlEYSIgeDE9IjMxLjUiIHgyPSIzMS41IiB5MT0iNyIgeTI9IjU4LjcxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWE2ZGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgyMmZmIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI0JSd353M0VZNVlPYmh2N09wTTlJRGEpIiBkPSJNNDksMTFIMzN2MmgxNmMyLjc2LDAsNSwyLjI0LDUsNXYyMEgyNC44MUwzMSwyOS41VjdIMTd2MjIuNWw2LjI1LDguNThMMjkuNDIsNDhoLTIuOCBMMTksNTQuNTVWNDhoLTVjLTIuNzYsMC01LTIuMjQtNS01VjE4YzAtMi43NiwyLjI0LTUsNS01aDF2LTJoLTFjLTMuODYsMC03LDMuMTQtNyw3djI1YzAsMy44NiwzLjE0LDcsNyw3aDN2OWwxMC4zOC05SDQ5IGMzLjg2LDAsNy0zLjE0LDctN1YxOEM1NiwxNC4xNCw1Mi44NiwxMSw0OSwxMXogTTE5LDloMTB2MTcuNjFsLTUtMS42NmwtNSwxLjY2Vjl6IE0yMS4yOSwzMkwxOSwyOC44NXYtMC4xM2w1LTEuNjdsNSwxLjY3djAuMTMgTDI2LjcxLDMySDIxLjI5eiBNNTQsNDNjMCwyLjc2LTIuMjQsNS01LDVIMzEuNzhsLTQuOTgtOEg1NFY0M3oiLz48bGluZWFyR3JhZGllbnQgaWQ9IkJSd353M0VZNVlPYmh2N09wTTlJRGIiIHgxPSIyNCIgeDI9IjI0IiB5MT0iMTEiIHkyPSIyMy44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNmRjN2ZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTZhYmZmIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI0JSd353M0VZNVlPYmh2N09wTTlJRGIpIiBkPSJNMjcgMTFMMjcgMjMuODQgMjQuNjMgMjMuMDUgMjQgMjIuODQgMjMuMzcgMjMuMDUgMjEgMjMuODQgMjEgMTF6Ii8+PC9zdmc+"
							width={30}
							height={30}
						/>
						Discover Blog
					</Link>
				</div>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://www.linkedin.com/in/ahmetbugraaydin/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="https://nextjs.org/icons/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Bugra Aydin
				</a>
			</footer>
		</div>
	);
}
