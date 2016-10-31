#!/usr/bin/env ruby
def main
  component_name = ARGV.first

  exit_no_name_specified if component_name.nil?

  generate component_name
end

def template(component_name)
"""import React, { Component } from 'react';

class #{component_name} extends Component {
  render() {
    return (
      <div>

        // Your code here

      </div>
    );
  }
}

export default #{component_name};"""
end

def generate component_name
  filepath = "./src/components/#{component_name}.js"
  exit_file_already_exists if File.exists? filepath

  File.write filepath, template(component_name)
end


def exit_no_name_specified
  print_red 'ERROR: Please specify the name of the component.'
  print_grey "\t$ generate-component <name>"
  exit!
end

def exit_file_already_exists
  print_red 'ERROR: A component with that name already exists.'
  exit!
end


def print_red text
  puts "\e[31m#{text}\e[0m"
end

def print_grey text
  puts "\e[1m#{text}\e[0m"
end

main