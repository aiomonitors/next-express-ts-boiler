import axios from 'axios';

interface WorldResponse {
    world: string;
}
export const hello = async (): Promise<WorldResponse> => {
	const res = await axios.get('http://localhost:3000/hello');
	return { world: res.data.hello };
};