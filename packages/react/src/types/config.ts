import type { CallbackFn } from '.'
import type { ISuccessResult, IDKitConfig, IErrorState } from '@decentralgabe/idkit-core'

export enum ConfigSource {
	HOOK = 'hook',
	PROPS = 'props',
	MANUAL = 'manual',
}

export type WidgetConfig = {
	/** Whether to automatically close the widget after a successful verification. Defaults to `false`. */
	autoClose?: boolean
	/** Function to trigger when verification is successful. Should receive a single parameter of type `ISuccessResult` which contains the proof details. */
	onSuccess: CallbackFn<ISuccessResult>
	/** Called after the proof is returned from the World App, but before showing the success screen. Throwing in this screen will show the user a custom error. Used to perform additional validation when needed. */
	handleVerify?: CallbackFn<ISuccessResult>
	/** Function to trigger when verification is not successful. Should receive a single parameter of type `IErrorState` which contains the error details. */
	onError?: CallbackFn<IErrorState>
}

export type Config = Required<Pick<IDKitConfig, 'action'>> &
	WidgetConfig &
	(
		| (Exclude<IDKitConfig, 'app_id'> & { advanced: { self_hosted: true }; face_auth?: boolean })
		| (IDKitConfig & { advanced?: { self_hosted?: false }; face_auth?: boolean })
	)

export type WidgetProps = Config & {
	children?: ({ open }: { open: () => void }) => JSX.Element
	show_modal?: boolean
	/** Whether to disable the default modal behavior. Defaults to `false`. */
	disable_default_modal_behavior?: boolean
	container_id?: string
}
