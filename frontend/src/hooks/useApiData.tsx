import {useEffect, useState} from 'react';

type UseApiDataFunction = (url: string) => {
	isLoading: boolean;
	data: Record<string, string> | undefined;
};

const useApiData: UseApiDataFunction = url => {
	const [data, setData] = useState<Record<string, string> | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);
		const response = await fetch(url, {
			headers: {
				Authorization: 'mysecrettoken',
			},
		});

		const contentType = response.headers.get('content-type')!;

		const result = contentType === 'application/json; charset=utf-8' ? await response.json() as Record<string, string> : {data: await response.text()};
		setData(result);
		setIsLoading(false);
	};

	useEffect(() => {
		void fetchData();
		const interval = setInterval(fetchData, 30000);
		return () => {
			clearInterval(interval);
		};
	}, [url]);

	return {
		data,
		isLoading,
	};
};

export default useApiData;
