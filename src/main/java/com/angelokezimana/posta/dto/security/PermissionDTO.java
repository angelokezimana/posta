package com.angelokezimana.posta.dto.security;

public record PermissionDTO(Long id,
                            String resource,
                            String action) {
}
