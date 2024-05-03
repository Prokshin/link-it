export interface IHandlerMessage<T> {
	status: 'success' | 'fail';
	data?: T;
	error?: {
		exceptionType: 'Forbidden' | 'Not Found' | 'Unexpected Error' | 'Contract Validation';
		message: string;
	};
}
