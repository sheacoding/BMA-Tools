// This file is auto-generated. DO NOT EDIT.
import { Call } from '@wailsio/runtime'

export function CurrentVersion(): Promise<string> {
  return Call.ByName('main.VersionService.CurrentVersion')
}
