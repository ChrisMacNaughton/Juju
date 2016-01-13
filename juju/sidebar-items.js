initSidebarItems({"enum":[["JujuError",""],["StatusType","For information about what these StatusType variants mean see: Status reference"],["Transport",""]],"fn":[["action_fail","See Juju Actions for more information # Failures Returns stderr if the action_fail command fails"],["action_get","action_get gets the value of the parameter at the given key See Juju Actions for more information # Failures Returns stderr if the action_get command fails"],["action_set","action_set permits the Action to set results in a map to be returned at completion of the Action. See Juju Actions for more information # Failures Returns stderr if the action_set command fails"],["close_port","This will hide a port on the unit.  The transport argument will indicate whether tcp or udp should be exposed"],["config_get","This will return a configuration item that corresponds to the key passed in"],["config_get_all","config_get_all will return all configuration options as a HashMap<String,String> # Failures Returns a String of if the configuration options are not able to be transformed into a HashMap"],["is_leader","Returns true/false if this unit is the leader # Failures Will return stderr as a String if the function fails to run # Examples ``` extern crate juju; let leader = match juju::is_leader(){   Ok(l) => l,   Err(e) => {     println!(\"Failed to run.  Error was {:?}\", e);     //Bail     return;   }, }; if leader{   println!(\"I am the leader!\"); }else{   println!(\"I am not the leader.  Maybe later I will be promoted\"); } ```"],["log","Logs the msg passed to it # Examples ``` extern crate juju; let error = \"Error information\"; juju::log(&format!(\"Super important info. Error {}\", error)); ``` # Failures Does not return anything on failure.  Java has the same semantics.  I'm still wondering if this is the right thing to do."],["open_port","This will expose a port on the unit.  The transport argument will indicate whether tcp or udp should be exposed"],["process_hooks","Call this to process your cmd line arguments and call any needed hooks # Examples ```     extern crate juju;     use std::env;"],["reboot","This will reboot your juju instance.  Examples of using this are when a new kernel is installed and the virtual machine or server needs to be rebooted to use it. # Failures Returns stderr if the reboot command fails"],["relation_get",""],["relation_get_by_unit",""],["relation_ids",""],["relation_list","Returns a list of all related units # Failures Will return a String of the stderr if the call fails"],["relation_set",""],["status_set","Set the status of your unit to indicate to the Juju if everything is ok or something is wrong. See the Status enum for information about what can be set."],["storage_get","If storage drives were allocated to your unit this will get the path of the named device."],["storage_get_location","If storage drives were allocated to your unit this will get the path of them."],["storage_list","storage-list may be used to list storage instances that are attached to the unit. The names returned may be passed through to storage_get_location."],["unit_get_private_addr","This will return the private IP address associated with the unit. It can be very useful for services that require communicating with the other units related to it."],["unit_get_public_addr","This will return the public IP address associated with the unit."]],"struct":[["Context",""],["Hook",""],["Relation",""],["Status",""]]});