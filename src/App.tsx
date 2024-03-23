import { IconButton, Rating, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";

export default function App() {
	return (
		<div className="p-8">
			<h1 className="text-3xl font-semibold mb-4 text-red-600 border p-5">
				MUI + Vite.js + Tailwind CSS in TypeScript
			</h1>

			<Button
				className=" text-red-500 border border-red-300 pz-4 w-1/2 mr-4"
				variant="outlined"
			>
				Hello
			</Button>
			<Button variant="contained" className="bg-red-600 border-2 rounded-none">
				Hello world
			</Button>

			<Rating name="no-value" value={4} className="text-red-600" />

			<IconButton aria-label="delete" className="p-2 bg-black text-white">
				<DeleteIcon />
			</IconButton>

			<Stack
				direction="row"
				className="flex-col border shadow-md mt-4 items-start w-1/2"
			>
				<IconButton aria-label="delete">
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="delete" disabled color="primary">
					<DeleteIcon />
				</IconButton>
				<IconButton
					color="secondary"
					aria-label="add an alarm"
					className="text-green-300"
				>
					<AlarmIcon />
				</IconButton>
			</Stack>
		</div>
	);
}
