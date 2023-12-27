import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
export const BUTTON=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Button onClick={onOpen}>Make Payment</Button>
      
        <Modal
           
           isOpen={isOpen}
           onClose={onClose}
         >
           <ModalOverlay />
           <ModalContent>
             <ModalHeader>Make Payment</ModalHeader>
             <ModalCloseButton />
             <ModalBody pb={6}>
               <FormControl>
                 <FormLabel>Account Number</FormLabel>
                 <Input   placeholder='Account Number' />
               </FormControl>
               
               <FormControl>
                 <FormLabel>Account Number</FormLabel>
                 <Input   placeholder='Account Number' />
               </FormControl>
    
               <FormControl mt={4}>
                 <FormLabel>Amount</FormLabel>
                 <Input placeholder='amount' />
               </FormControl>
             </ModalBody>
    
             <ModalFooter>
               <Button colorScheme='blue' mr={3}>
                 pay
               </Button>
              
             </ModalFooter>
           </ModalContent>
         </Modal>
         </>
    )
}