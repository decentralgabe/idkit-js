import useIDKit from './hooks/useIDKit'
import IDKitWidget from '@/components/IDKitWidget/index'
import type { WidgetProps, Config } from '@/types/config'
import { VerificationLevel } from '@decentralgabe/idkit-core'
import { solidityEncode } from '@decentralgabe/idkit-core/hashing'
import { verifyCloudProof } from '@decentralgabe/idkit-core/backend'
import type { IVerifyResponse } from '@decentralgabe/idkit-core/backend'
import type { ISuccessResult, IErrorState } from '@decentralgabe/idkit-core'

export { IDKitWidget, useIDKit, solidityEncode, verifyCloudProof, VerificationLevel }
export type { ISuccessResult, IErrorState, IVerifyResponse, Config, WidgetProps }
