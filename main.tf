terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}
provider "aws" {
  region = "us-east-1"
}
resource "aws" "demoproject" {
  ami = "ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"
  instance_type = "t3.micro"

  tags = {
    Name = "demo-project"
  }
}  
  
