import ModalContent from 'src/modules/Modal/ModalContent'
import * as common from 'test/specs/commonTests'

describe('ModalContent', () => {
  common.isConformant(ModalContent)
  common.rendersChildren(ModalContent)

  common.propKeyOnlyToClassName(ModalContent, 'image')
})
