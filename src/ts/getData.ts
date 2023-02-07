import { IData } from "../interfaces/data-json"

async function getData(): Promise<IData>{
	const data = await fetch('../../data.json')
	const json = await data.json()
	return json
}

export { getData }