Edward knows that NSA agents use the following algorithm to cypher their messages.

1) They delete all spaces and punctuation marks.
2) They replace all successive identical letters by one such letter.
3) They insert two identical letters at an arbitrary place many times.

Edward has intercepted some messages which are "meaningless" sequences of letters that NSA agent Bob has sent to other NSA agent Alice about possible Edward’s location. He wants to be able to restore the message as it was after step 2). Help Edward write edwardDecrypt(message) JavaScript function that removes all pairs of identical letters from the message inserted at the 3rd step. 

The solution should be a simple HTML page with one Textarea, one Button, and one Answer area. When a user clicks the Button, the message entered in Textarea should be processed by edwardDecrypt(message) function and the result should be displayed in Answer area. The message always consists of lowercase English letters and its length is at most 100 000. Output the message after step 2). The program should produce an answer in less than a few seconds.

Example:
1) Type the following message in Textarea: wweddaadwaffrdnn
2) Press Decrypt Button
3) The decrypted message appears in Answer area: edward
