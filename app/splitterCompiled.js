const splitterCompiled = {
  "contractName": "Splitter",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x27e235e3"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x715018a6"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8da5cb5b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8f32d59b"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf2fde38b"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "whoDidSplit",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amountToSplit",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "splitToAccount1",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "splitToAccount2",
          "type": "address"
        }
      ],
      "name": "LogSplit",
      "type": "event",
      "signature": "0x294561be4d5d042bd5fa2e7c80dd42bb018d7d15c06d95b542a150419ff80560"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "whoWithdrew",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amountWithdrawn",
          "type": "uint256"
        }
      ],
      "name": "LogWithdrawal",
      "type": "event",
      "signature": "0xb4214c8c54fc7442f36d3682f59aebaf09358a4431835b30efb29d52cf9e1e91"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event",
      "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "splitToAccount1",
          "type": "address"
        },
        {
          "name": "splitToAccount2",
          "type": "address"
        }
      ],
      "name": "splitBetween",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function",
      "signature": "0xf23ca928"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3ccfd60b"
    }
  ],
  "bytecode": "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36109c5806100cf6000396000f3fe60806040526004361061008d576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b1161006b5780638da5cb5b146101255780638f32d59b1461017c578063f23ca928146101ab578063f2fde38b1461020f5761008d565b806327e235e3146100925780633ccfd60b146100f7578063715018a61461010e575b600080fd5b34801561009e57600080fd5b506100e1600480360360208110156100b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610260565b6040518082815260200191505060405180910390f35b34801561010357600080fd5b5061010c610278565b005b34801561011a57600080fd5b5061012361040f565b005b34801561013157600080fd5b5061013a6104df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561018857600080fd5b50610191610508565b604051808215151515815260200191505060405180910390f35b61020d600480360360408110156101c157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061055f565b005b34801561021b57600080fd5b5061025e6004803603602081101561023257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610865565b005b60016020528060005260406000206000915090505481565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008111610332576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4e6f7468696e6720617661696c61626c6520746f2077697468647261772e000081525060200191505060405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fb4214c8c54fc7442f36d3682f59aebaf09358a4431835b30efb29d52cf9e1e91826040518082815260200191505060405180910390a23373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561040b573d6000803e3d6000fd5b5050565b610417610508565b61042057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561059957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105d357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561060c57600080fd5b60006002348161061857fe5b04905061066d81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461088290919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061070281600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461088290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107a16002348161075257fe5b06600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461088290919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f294561be4d5d042bd5fa2e7c80dd42bb018d7d15c06d95b542a150419ff80560346040518082815260200191505060405180910390a4505050565b61086d610508565b61087657600080fd5b61087f816108a1565b50565b60008082840190508381101561089757600080fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108db57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fea165627a7a72305820938dab69db5094d08030ff126140cad4843636b2d8ba8834339396a4a7dfd3f30029",
  "deployedBytecode": "0x60806040526004361061008d576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b1161006b5780638da5cb5b146101255780638f32d59b1461017c578063f23ca928146101ab578063f2fde38b1461020f5761008d565b806327e235e3146100925780633ccfd60b146100f7578063715018a61461010e575b600080fd5b34801561009e57600080fd5b506100e1600480360360208110156100b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610260565b6040518082815260200191505060405180910390f35b34801561010357600080fd5b5061010c610278565b005b34801561011a57600080fd5b5061012361040f565b005b34801561013157600080fd5b5061013a6104df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561018857600080fd5b50610191610508565b604051808215151515815260200191505060405180910390f35b61020d600480360360408110156101c157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061055f565b005b34801561021b57600080fd5b5061025e6004803603602081101561023257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610865565b005b60016020528060005260406000206000915090505481565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008111610332576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4e6f7468696e6720617661696c61626c6520746f2077697468647261772e000081525060200191505060405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fb4214c8c54fc7442f36d3682f59aebaf09358a4431835b30efb29d52cf9e1e91826040518082815260200191505060405180910390a23373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561040b573d6000803e3d6000fd5b5050565b610417610508565b61042057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561059957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105d357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561060c57600080fd5b60006002348161061857fe5b04905061066d81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461088290919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061070281600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461088290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107a16002348161075257fe5b06600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461088290919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f294561be4d5d042bd5fa2e7c80dd42bb018d7d15c06d95b542a150419ff80560346040518082815260200191505060405180910390a4505050565b61086d610508565b61087657600080fd5b61087f816108a1565b50565b60008082840190508381101561089757600080fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108db57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fea165627a7a72305820938dab69db5094d08030ff126140cad4843636b2d8ba8834339396a4a7dfd3f30029",
  "sourceMap": "74:1684:3:-;;;524:10:1;515:6;;:19;;;;;;;;;;;;;;;;;;582:6;;;;;;;;;;;549:40;;578:1;549:40;;;;;;;;;;;;74:1684:3;;;;;;",
  "deployedSourceMap": "74:1684:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;139:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;139:41:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;139:41:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1394:362;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1394:362:3;;;:::i;:::-;;1423:137:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1423:137:1;;;:::i;:::-;;659:77;;8:9:-1;5:2;;;30:1;27;20:12;5:2;659:77:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;979:90;;8:9:-1;5:2;;;30:1;27;20:12;5:2;979:90:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;407:981:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;407:981:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1731:107:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1731:107:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1731:107:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;139:41:3;;;;;;;;;;;;;;;;;:::o;1394:362::-;1431:12;1446:8;:20;1455:10;1446:20;;;;;;;;;;;;;;;;1431:35;;1496:1;1486:7;:11;1477:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1660:1;1637:8;:20;1646:10;1637:20;;;;;;;;;;;;;;;:24;;;;1690:10;1676:34;;;1702:7;1676:34;;;;;;;;;;;;;;;;;;1721:10;:19;;:28;1741:7;1721:28;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1721:28:3;1394:362;:::o;1423:137:1:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1484:40;;1505:6;;;;;;;;;;;1484:40;;;;;;;;;;;;1551:1;1534:6;;:19;;;;;;;;;;;;;;;;;;1423:137::o;659:77::-;697:7;723:6;;;;;;;;;;;716:13;;659:77;:::o;979:90::-;1019:4;1056:6;;;;;;;;;;;1042:20;;:10;:20;;;1035:27;;979:90;:::o;407:981:3:-;602:1;575:29;;:15;:29;;;;566:40;;;;;;652:1;625:29;;:15;:29;;;;616:40;;;;;;792:15;773:34;;:15;:34;;;;764:45;;;;;;889:9;913:1;901:9;:13;;;;;;889:25;;1025:35;1055:4;1025:8;:25;1034:15;1025:25;;;;;;;;;;;;;;;;:29;;:35;;;;:::i;:::-;997:8;:25;1006:15;997:25;;;;;;;;;;;;;;;:63;;;;1098:35;1128:4;1098:8;:25;1107:15;1098:25;;;;;;;;;;;;;;;;:29;;:35;;;;:::i;:::-;1070:8;:25;1079:15;1070:25;;;;;;;;;;;;;;;:63;;;;1253:39;1290:1;1278:9;:13;;;;;;1253:8;:20;1262:10;1253:20;;;;;;;;;;;;;;;;:24;;:39;;;;:::i;:::-;1230:8;:20;1239:10;1230:20;;;;;;;;;;;;;;;:62;;;;1365:15;1316:65;;1348:15;1316:65;;1325:10;1316:65;;;1337:9;1316:65;;;;;;;;;;;;;;;;;;407:981;;;:::o;1731:107:1:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;:::-;1731:107;:::o;1440:145:2:-;1498:7;1517:9;1533:1;1529;:5;1517:17;;1557:1;1552;:6;;1544:15;;;;;;1577:1;1570:8;;;1440:145;;;;:::o;1982:183:1:-;2075:1;2055:22;;:8;:22;;;;2047:31;;;;;;2122:8;2093:38;;2114:6;;;;;;;;;;;2093:38;;;;;;;;;;;;2150:8;2141:6;;:17;;;;;;;;;;;;;;;;;;1982:183;:::o",
  "source": "pragma solidity 0.5.7;\n\nimport \"./SafeMath.sol\";\nimport \"./Ownable.sol\";\n\ncontract Splitter is Ownable{\n\n    using SafeMath for uint;\n\n    mapping (address => uint) public balances;\n    \n    event LogSplit(address indexed whoDidSplit, uint amountToSplit, address indexed splitToAccount1, address indexed splitToAccount2);\n    event LogWithdrawal(address indexed whoWithdrew, uint amountWithdrawn);\n    \n    function splitBetween(address splitToAccount1, address splitToAccount2) public payable {\n\n        // Neither provided account should be unset (or 0x).\n        require( splitToAccount1 != address(0) );\n        require( splitToAccount2 != address(0) );\n\n        // Not strictly necessary, but provided accounts should probably be different addresses.\n        require( splitToAccount1 != splitToAccount2 );\n\n        // amount to be distributed to each of the supplied accounts\n        uint half = msg.value / 2;\n        \n        // add half of the sent amount to each provided account\n        balances[splitToAccount1] = balances[splitToAccount1].add(half);\n        balances[splitToAccount2] = balances[splitToAccount2].add(half);\n\n        // if there is a remainder (an odd wei), add it to the account of the sender.\n        balances[msg.sender] = balances[msg.sender].add(msg.value % 2);\n        \n        emit LogSplit(msg.sender, msg.value, splitToAccount1, splitToAccount2);\n    }\n\n    function withdraw() public{\n\n        uint balance = balances[msg.sender];\n\n        require( balance > 0, \"Nothing available to withdraw.\" );\n\n        // optimistically mark this as transferred, if it fails this will be reverted anyway\n        balances[msg.sender] = 0;\n        emit LogWithdrawal(msg.sender, balance);\n\n        msg.sender.transfer(balance);\n    }\n}",
  "sourcePath": "/home/andrew/b9labs/dapps/splitter/contracts/Splitter.sol",
  "ast": {
    "absolutePath": "/home/andrew/b9labs/dapps/splitter/contracts/Splitter.sol",
    "exportedSymbols": {
      "Splitter": [
        446
      ]
    },
    "id": 447,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 295,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:3"
      },
      {
        "absolutePath": "/home/andrew/b9labs/dapps/splitter/contracts/SafeMath.sol",
        "file": "./SafeMath.sol",
        "id": 296,
        "nodeType": "ImportDirective",
        "scope": 447,
        "sourceUnit": 294,
        "src": "24:24:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/andrew/b9labs/dapps/splitter/contracts/Ownable.sol",
        "file": "./Ownable.sol",
        "id": 297,
        "nodeType": "ImportDirective",
        "scope": 447,
        "sourceUnit": 166,
        "src": "49:23:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 298,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 165,
              "src": "95:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$165",
                "typeString": "contract Ownable"
              }
            },
            "id": 299,
            "nodeType": "InheritanceSpecifier",
            "src": "95:7:3"
          }
        ],
        "contractDependencies": [
          165
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 446,
        "linearizedBaseContracts": [
          446,
          165
        ],
        "name": "Splitter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 302,
            "libraryName": {
              "contractScope": null,
              "id": 300,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 293,
              "src": "115:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$293",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "109:24:3",
            "typeName": {
              "id": 301,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "128:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 306,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 446,
            "src": "139:41:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 305,
              "keyType": {
                "id": 303,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "148:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "139:25:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 304,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "159:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 316,
            "name": "LogSplit",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 308,
                  "indexed": true,
                  "name": "whoDidSplit",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "206:27:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 307,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 310,
                  "indexed": false,
                  "name": "amountToSplit",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "235:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 309,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 312,
                  "indexed": true,
                  "name": "splitToAccount1",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "255:31:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 311,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 314,
                  "indexed": true,
                  "name": "splitToAccount2",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "288:31:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 313,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:115:3"
            },
            "src": "191:130:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 322,
            "name": "LogWithdrawal",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 318,
                  "indexed": true,
                  "name": "whoWithdrew",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "346:27:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 317,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "346:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 320,
                  "indexed": false,
                  "name": "amountWithdrawn",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "375:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 319,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "345:51:3"
            },
            "src": "326:71:3"
          },
          {
            "body": {
              "id": 405,
              "nodeType": "Block",
              "src": "494:894:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 334,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 330,
                          "name": "splitToAccount1",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 324,
                          "src": "575:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 332,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "602:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 331,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "594:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 333,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "594:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "575:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 329,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        464,
                        465
                      ],
                      "referencedDeclaration": 464,
                      "src": "566:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 335,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "566:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 336,
                  "nodeType": "ExpressionStatement",
                  "src": "566:40:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 342,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 338,
                          "name": "splitToAccount2",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 326,
                          "src": "625:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 340,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "652:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 339,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "644:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "644:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "625:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 337,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        464,
                        465
                      ],
                      "referencedDeclaration": 464,
                      "src": "616:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "616:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 344,
                  "nodeType": "ExpressionStatement",
                  "src": "616:40:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 348,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 346,
                          "name": "splitToAccount1",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 324,
                          "src": "773:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 347,
                          "name": "splitToAccount2",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 326,
                          "src": "792:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "773:34:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 345,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        464,
                        465
                      ],
                      "referencedDeclaration": 464,
                      "src": "764:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "764:45:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 350,
                  "nodeType": "ExpressionStatement",
                  "src": "764:45:3"
                },
                {
                  "assignments": [
                    352
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 352,
                      "name": "half",
                      "nodeType": "VariableDeclaration",
                      "scope": 405,
                      "src": "889:9:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 351,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "889:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 357,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 356,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 353,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 461,
                        "src": "901:3:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 354,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "901:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "913:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "901:13:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "889:25:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 358,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "997:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 360,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 359,
                        "name": "splitToAccount1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 324,
                        "src": "1006:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "997:25:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 365,
                          "name": "half",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 352,
                          "src": "1055:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 361,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 306,
                            "src": "1025:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 363,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 362,
                            "name": "splitToAccount1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 324,
                            "src": "1034:15:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1025:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 272,
                        "src": "1025:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 366,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1025:35:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "997:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 368,
                  "nodeType": "ExpressionStatement",
                  "src": "997:63:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 369,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "1070:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 371,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 370,
                        "name": "splitToAccount2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 326,
                        "src": "1079:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1070:25:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 376,
                          "name": "half",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 352,
                          "src": "1128:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 372,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 306,
                            "src": "1098:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 374,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 373,
                            "name": "splitToAccount2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 326,
                            "src": "1107:15:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1098:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 272,
                        "src": "1098:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1098:35:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1070:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 379,
                  "nodeType": "ExpressionStatement",
                  "src": "1070:63:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 394,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 380,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "1230:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 383,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 381,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1239:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 382,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1239:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1230:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 392,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 389,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 461,
                              "src": "1278:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 390,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1278:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 391,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1290:1:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "1278:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 384,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 306,
                            "src": "1253:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 387,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 385,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 461,
                              "src": "1262:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 386,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1262:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1253:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 272,
                        "src": "1253:24:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1253:39:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1230:62:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 395,
                  "nodeType": "ExpressionStatement",
                  "src": "1230:62:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 397,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1325:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 398,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1325:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 399,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1337:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 400,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1337:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 401,
                        "name": "splitToAccount1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 324,
                        "src": "1348:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 402,
                        "name": "splitToAccount2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 326,
                        "src": "1365:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 396,
                      "name": "LogSplit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 316,
                      "src": "1316:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,uint256,address,address)"
                      }
                    },
                    "id": 403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1316:65:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 404,
                  "nodeType": "EmitStatement",
                  "src": "1311:70:3"
                }
              ]
            },
            "documentation": null,
            "id": 406,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "splitBetween",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 324,
                  "name": "splitToAccount1",
                  "nodeType": "VariableDeclaration",
                  "scope": 406,
                  "src": "429:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 323,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 326,
                  "name": "splitToAccount2",
                  "nodeType": "VariableDeclaration",
                  "scope": 406,
                  "src": "454:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 325,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "454:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:50:3"
            },
            "returnParameters": {
              "id": 328,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "494:0:3"
            },
            "scope": 446,
            "src": "407:981:3",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 444,
              "nodeType": "Block",
              "src": "1420:336:3",
              "statements": [
                {
                  "assignments": [
                    410
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 410,
                      "name": "balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 444,
                      "src": "1431:12:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 409,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1431:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 415,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 411,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 306,
                      "src": "1446:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 414,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 412,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 461,
                        "src": "1455:3:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 413,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1455:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1446:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1431:35:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 419,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 417,
                          "name": "balance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 410,
                          "src": "1486:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 418,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1496:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1486:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4e6f7468696e6720617661696c61626c6520746f2077697468647261772e",
                        "id": 420,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1499:32:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1ab93d6e7f18723587544a3aa0997fc2c4913f415b3487e557b4942e344c0b25",
                          "typeString": "literal_string \"Nothing available to withdraw.\""
                        },
                        "value": "Nothing available to withdraw."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_1ab93d6e7f18723587544a3aa0997fc2c4913f415b3487e557b4942e344c0b25",
                          "typeString": "literal_string \"Nothing available to withdraw.\""
                        }
                      ],
                      "id": 416,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        464,
                        465
                      ],
                      "referencedDeclaration": 465,
                      "src": "1477:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1477:56:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 422,
                  "nodeType": "ExpressionStatement",
                  "src": "1477:56:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 428,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 423,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "1637:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 426,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 424,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1646:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1646:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1637:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 427,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1660:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1637:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 429,
                  "nodeType": "ExpressionStatement",
                  "src": "1637:24:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 431,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1690:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1690:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 433,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 410,
                        "src": "1702:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 430,
                      "name": "LogWithdrawal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 322,
                      "src": "1676:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 434,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1676:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 435,
                  "nodeType": "EmitStatement",
                  "src": "1671:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 441,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 410,
                        "src": "1741:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 436,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1721:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1721:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1721:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1721:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 443,
                  "nodeType": "ExpressionStatement",
                  "src": "1721:28:3"
                }
              ]
            },
            "documentation": null,
            "id": 445,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 407,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1411:2:3"
            },
            "returnParameters": {
              "id": 408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1420:0:3"
            },
            "scope": 446,
            "src": "1394:362:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 447,
        "src": "74:1684:3"
      }
    ],
    "src": "0:1758:3"
  },
  "legacyAST": {
    "absolutePath": "/home/andrew/b9labs/dapps/splitter/contracts/Splitter.sol",
    "exportedSymbols": {
      "Splitter": [
        446
      ]
    },
    "id": 447,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 295,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:3"
      },
      {
        "absolutePath": "/home/andrew/b9labs/dapps/splitter/contracts/SafeMath.sol",
        "file": "./SafeMath.sol",
        "id": 296,
        "nodeType": "ImportDirective",
        "scope": 447,
        "sourceUnit": 294,
        "src": "24:24:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/andrew/b9labs/dapps/splitter/contracts/Ownable.sol",
        "file": "./Ownable.sol",
        "id": 297,
        "nodeType": "ImportDirective",
        "scope": 447,
        "sourceUnit": 166,
        "src": "49:23:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 298,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 165,
              "src": "95:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$165",
                "typeString": "contract Ownable"
              }
            },
            "id": 299,
            "nodeType": "InheritanceSpecifier",
            "src": "95:7:3"
          }
        ],
        "contractDependencies": [
          165
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 446,
        "linearizedBaseContracts": [
          446,
          165
        ],
        "name": "Splitter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 302,
            "libraryName": {
              "contractScope": null,
              "id": 300,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 293,
              "src": "115:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$293",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "109:24:3",
            "typeName": {
              "id": 301,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "128:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 306,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 446,
            "src": "139:41:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 305,
              "keyType": {
                "id": 303,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "148:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "139:25:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 304,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "159:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 316,
            "name": "LogSplit",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 308,
                  "indexed": true,
                  "name": "whoDidSplit",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "206:27:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 307,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 310,
                  "indexed": false,
                  "name": "amountToSplit",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "235:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 309,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 312,
                  "indexed": true,
                  "name": "splitToAccount1",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "255:31:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 311,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 314,
                  "indexed": true,
                  "name": "splitToAccount2",
                  "nodeType": "VariableDeclaration",
                  "scope": 316,
                  "src": "288:31:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 313,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:115:3"
            },
            "src": "191:130:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 322,
            "name": "LogWithdrawal",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 318,
                  "indexed": true,
                  "name": "whoWithdrew",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "346:27:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 317,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "346:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 320,
                  "indexed": false,
                  "name": "amountWithdrawn",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "375:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 319,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "345:51:3"
            },
            "src": "326:71:3"
          },
          {
            "body": {
              "id": 405,
              "nodeType": "Block",
              "src": "494:894:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 334,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 330,
                          "name": "splitToAccount1",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 324,
                          "src": "575:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 332,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "602:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 331,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "594:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 333,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "594:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "575:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 329,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        464,
                        465
                      ],
                      "referencedDeclaration": 464,
                      "src": "566:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 335,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "566:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 336,
                  "nodeType": "ExpressionStatement",
                  "src": "566:40:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 342,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 338,
                          "name": "splitToAccount2",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 326,
                          "src": "625:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 340,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "652:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 339,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "644:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "644:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "625:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 337,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        464,
                        465
                      ],
                      "referencedDeclaration": 464,
                      "src": "616:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "616:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 344,
                  "nodeType": "ExpressionStatement",
                  "src": "616:40:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 348,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 346,
                          "name": "splitToAccount1",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 324,
                          "src": "773:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 347,
                          "name": "splitToAccount2",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 326,
                          "src": "792:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "773:34:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 345,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        464,
                        465
                      ],
                      "referencedDeclaration": 464,
                      "src": "764:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "764:45:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 350,
                  "nodeType": "ExpressionStatement",
                  "src": "764:45:3"
                },
                {
                  "assignments": [
                    352
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 352,
                      "name": "half",
                      "nodeType": "VariableDeclaration",
                      "scope": 405,
                      "src": "889:9:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 351,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "889:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 357,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 356,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 353,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 461,
                        "src": "901:3:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 354,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "901:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "913:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "901:13:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "889:25:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 358,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "997:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 360,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 359,
                        "name": "splitToAccount1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 324,
                        "src": "1006:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "997:25:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 365,
                          "name": "half",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 352,
                          "src": "1055:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 361,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 306,
                            "src": "1025:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 363,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 362,
                            "name": "splitToAccount1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 324,
                            "src": "1034:15:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1025:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 272,
                        "src": "1025:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 366,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1025:35:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "997:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 368,
                  "nodeType": "ExpressionStatement",
                  "src": "997:63:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 369,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "1070:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 371,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 370,
                        "name": "splitToAccount2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 326,
                        "src": "1079:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1070:25:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 376,
                          "name": "half",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 352,
                          "src": "1128:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 372,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 306,
                            "src": "1098:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 374,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 373,
                            "name": "splitToAccount2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 326,
                            "src": "1107:15:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1098:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 272,
                        "src": "1098:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1098:35:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1070:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 379,
                  "nodeType": "ExpressionStatement",
                  "src": "1070:63:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 394,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 380,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "1230:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 383,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 381,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1239:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 382,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1239:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1230:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 392,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 389,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 461,
                              "src": "1278:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 390,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1278:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 391,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1290:1:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "1278:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 384,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 306,
                            "src": "1253:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 387,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 385,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 461,
                              "src": "1262:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 386,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1262:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1253:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 272,
                        "src": "1253:24:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1253:39:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1230:62:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 395,
                  "nodeType": "ExpressionStatement",
                  "src": "1230:62:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 397,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1325:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 398,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1325:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 399,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1337:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 400,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1337:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 401,
                        "name": "splitToAccount1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 324,
                        "src": "1348:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 402,
                        "name": "splitToAccount2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 326,
                        "src": "1365:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 396,
                      "name": "LogSplit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 316,
                      "src": "1316:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,uint256,address,address)"
                      }
                    },
                    "id": 403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1316:65:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 404,
                  "nodeType": "EmitStatement",
                  "src": "1311:70:3"
                }
              ]
            },
            "documentation": null,
            "id": 406,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "splitBetween",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 324,
                  "name": "splitToAccount1",
                  "nodeType": "VariableDeclaration",
                  "scope": 406,
                  "src": "429:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 323,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 326,
                  "name": "splitToAccount2",
                  "nodeType": "VariableDeclaration",
                  "scope": 406,
                  "src": "454:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 325,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "454:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:50:3"
            },
            "returnParameters": {
              "id": 328,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "494:0:3"
            },
            "scope": 446,
            "src": "407:981:3",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 444,
              "nodeType": "Block",
              "src": "1420:336:3",
              "statements": [
                {
                  "assignments": [
                    410
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 410,
                      "name": "balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 444,
                      "src": "1431:12:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 409,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1431:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 415,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 411,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 306,
                      "src": "1446:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 414,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 412,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 461,
                        "src": "1455:3:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 413,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1455:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1446:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1431:35:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 419,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 417,
                          "name": "balance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 410,
                          "src": "1486:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 418,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1496:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1486:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4e6f7468696e6720617661696c61626c6520746f2077697468647261772e",
                        "id": 420,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1499:32:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1ab93d6e7f18723587544a3aa0997fc2c4913f415b3487e557b4942e344c0b25",
                          "typeString": "literal_string \"Nothing available to withdraw.\""
                        },
                        "value": "Nothing available to withdraw."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_1ab93d6e7f18723587544a3aa0997fc2c4913f415b3487e557b4942e344c0b25",
                          "typeString": "literal_string \"Nothing available to withdraw.\""
                        }
                      ],
                      "id": 416,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        464,
                        465
                      ],
                      "referencedDeclaration": 465,
                      "src": "1477:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1477:56:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 422,
                  "nodeType": "ExpressionStatement",
                  "src": "1477:56:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 428,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 423,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 306,
                        "src": "1637:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 426,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 424,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1646:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1646:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1637:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 427,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1660:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1637:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 429,
                  "nodeType": "ExpressionStatement",
                  "src": "1637:24:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 431,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1690:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1690:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 433,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 410,
                        "src": "1702:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 430,
                      "name": "LogWithdrawal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 322,
                      "src": "1676:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 434,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1676:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 435,
                  "nodeType": "EmitStatement",
                  "src": "1671:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 441,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 410,
                        "src": "1741:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 436,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 461,
                          "src": "1721:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1721:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1721:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1721:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 443,
                  "nodeType": "ExpressionStatement",
                  "src": "1721:28:3"
                }
              ]
            },
            "documentation": null,
            "id": 445,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 407,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1411:2:3"
            },
            "returnParameters": {
              "id": 408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1420:0:3"
            },
            "scope": 446,
            "src": "1394:362:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 447,
        "src": "74:1684:3"
      }
    ],
    "src": "0:1758:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.7+commit.6da8b019.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x294561be4d5d042bd5fa2e7c80dd42bb018d7d15c06d95b542a150419ff80560": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "whoDidSplit",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "amountToSplit",
              "type": "uint256"
            },
            {
              "indexed": true,
              "name": "splitToAccount1",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "splitToAccount2",
              "type": "address"
            }
          ],
          "name": "LogSplit",
          "type": "event",
          "signature": "0x294561be4d5d042bd5fa2e7c80dd42bb018d7d15c06d95b542a150419ff80560"
        },
        "0xb4214c8c54fc7442f36d3682f59aebaf09358a4431835b30efb29d52cf9e1e91": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "whoWithdrew",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "amountWithdrawn",
              "type": "uint256"
            }
          ],
          "name": "LogWithdrawal",
          "type": "event",
          "signature": "0xb4214c8c54fc7442f36d3682f59aebaf09358a4431835b30efb29d52cf9e1e91"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event",
          "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
        }
      },
      "links": {},
      "address": "0x018D4a4249CF4B978ae79962780809CFE7a5ECD3",
      "transactionHash": "0xbcd279c6b278c0d974b6ec122121b0bdceb00209da558256c7ec2556f766b58b"
    }
  },
  "schemaVersion": "3.0.3",
  "updatedAt": "2019-04-24T21:53:18.073Z",
  "devdoc": {
    "methods": {
      "isOwner()": {
        "return": "true if `msg.sender` is the owner of the contract."
      },
      "owner()": {
        "return": "the address of the owner."
      },
      "renounceOwnership()": {
        "details": "Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore."
      },
      "transferOwnership(address)": {
        "details": "Allows the current owner to transfer control of the contract to a newOwner.",
        "params": {
          "newOwner": "The address to transfer ownership to."
        }
      }
    }
  },
  "userdoc": {
    "methods": {
      "renounceOwnership()": {
        "notice": "Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      }
    }
  }
}