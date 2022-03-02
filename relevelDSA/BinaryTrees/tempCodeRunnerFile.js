function levelOrderLevelWise(root) {

        let queue = new Queue();
        let null_node = new Node(null);
        queue.enqueue(root);
        queue.enqueue(null_node);
        let result = "";
        while(!queue.isEmpty()) {
            let current = queue.dequeue();
            if(current.data == null) {
                if(!queue.isEmpty()) {
                    queue.enqueue(new Node(null));
                    result += "\n";
                }
            } else {
                result += (current.data + " ");
            }
            if(current.left != null) {
                queue.enqueue(current.left);
            }
            if(current.right != null) {
                queue.enqueue(current.right);
            }
        }
        console.log(result);

}